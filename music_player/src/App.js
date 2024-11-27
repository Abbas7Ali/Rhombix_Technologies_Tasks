import React, { useState, useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone"; // Used this for uploading files with all open, upload or drage and drop functionalities.
import { useSelector, useDispatch } from "react-redux"; // Used this to manage audio playbacks and Playing one file at a ime
import { openDB } from "idb"; // IndexedDB. I used this for managing large audio files that are not manageable with local and session storages.
import { setCurrentlyPlaying, pauseCurrentlyPlaying } from "./redux/audioSlice";
import { FaHeart, FaTrash } from "react-icons/fa";
import {Footer} from "./components/Footer";


const App = () => {
  const [audioFiles, setAudioFiles] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const audioRefs = useRef({});

  const currentlyPlaying = useSelector((state) => state.audio.currentlyPlaying);
  const dispatch = useDispatch();

  // Function to handle audio playback
  const handlePlayAudio = (file, audioElement) => {
    if (currentlyPlaying === file.id) {
      if (audioElement.paused) {
        audioElement.play();
      }
    } else {
      // Pause other audios
      Object.keys(audioRefs.current).forEach((key) => {
        const audio = audioRefs.current[key];
        if (audio && key !== file.id) {
          audio.pause();
          dispatch(pauseCurrentlyPlaying());
        }
      });

      dispatch(setCurrentlyPlaying(file.id));
      audioElement.play();
    }
  };

  // Open IndexedDB
  const openDatabase = async () => {
    const db = await openDB("audioDatabase", 1, {
      upgrade(db) {
        const store = db.createObjectStore("audioFiles", {
          keyPath: "id",
        });
        store.createIndex("name", "name");
      },
    });
    return db;
  };

  // Load data from localStorage and IndexedDB
  useEffect(() => {
    const loadData = async () => {
      const storedAudioFiles =
        JSON.parse(localStorage.getItem("audioFiles")) || [];
      const validAudioFiles = storedAudioFiles.filter(
        (file) => new Date().getTime() < file.expirationDate
      );

      const storedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

      const db = await openDatabase();
      const storedFilesFromDB = await Promise.all(
        validAudioFiles.map(async (file) => {
          const audioFile = await db.get("audioFiles", file.id);
          return { ...file, url: audioFile?.url };
        })
      );

      setAudioFiles(storedFilesFromDB);
      setFavorites(storedFavorites);
    };

    loadData();
  }, []);

  // Save data to localStorage and IndexedDB
  useEffect(() => {
    const saveData = async () => {
      const db = await openDatabase();
      const newAudioFiles = audioFiles.map((file) => ({
        id: file.id,
        name: file.name,
        expirationDate: file.expirationDate,
      }));

      localStorage.setItem("audioFiles", JSON.stringify(newAudioFiles));
      localStorage.setItem("favorites", JSON.stringify(favorites));

      audioFiles.forEach(async (file) => {
        await db.put("audioFiles", { id: file.id, url: file.url });
      });
    };

    saveData();
  }, [audioFiles, favorites]);

  // Handle file upload via dropzone
  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Data = reader.result;
      const expirationDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 days from now
      const id = Date.now();

      const newFileMetadata = {
        name: file.name,
        id,
        expirationDate,
      };

      const db = await openDatabase();
      await db.put("audioFiles", { id, url: base64Data });

      setAudioFiles((prevFiles) => [
        ...prevFiles,
        { ...newFileMetadata, url: base64Data },
      ]);

      const storedAudioFiles =
        JSON.parse(localStorage.getItem("audioFiles")) || [];
      storedAudioFiles.push(newFileMetadata);
      localStorage.setItem("audioFiles", JSON.stringify(storedAudioFiles));
    };
    reader.readAsDataURL(file); // Read the file as Base64
  };

  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => handleFileUpload(file));
  };

  // Add file to favorites
  const handleAddToFavorites = (file) => {
    if (!favorites.find((fav) => fav.id === file.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, file]);
    }
  };

  // Remove file from favorites
  const handleRemoveFromFavorites = (file) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== file.id)
    );
  };

  // Delete file from playlist and localStorage
  const handleDeleteFile = (file) => {
    setAudioFiles((prevFiles) =>
      prevFiles.filter((audio) => audio.id !== file.id)
    );
    localStorage.setItem(
      "audioFiles",
      JSON.stringify(audioFiles.filter((audio) => audio.id !== file.id))
    );
    // Also remove from favorites if it's there
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== file.id)
    );
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites.filter((fav) => fav.id !== file.id))
    );
  };

  // Dropzone hook
  const { getRootProps, getInputProps } = useDropzone({
    accept: "audio/*",
    onDrop,
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <h1 className="text-4xl font-semibold mb-6">
        Music Player with Playlist
      </h1>

      {/* Drag and Drop Section */}
      <div
        {...getRootProps()}
        className="w-full max-w-xs p-6 border-2 border-dashed border-gray-400 rounded-lg mb-6 text-center cursor-pointer hover:bg-gray-800"
      >
        <input {...getInputProps()} />
        <p className="text-lg">
          Drag and drop audio files here, or click to select
        </p>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        {/* Complete Playlist Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Complete Playlist</h2>
          <ul className="space-y-4 mb-6">
            {audioFiles.map((file) => (
              <li
                key={file.id}
                className="flex group relative items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                <div className="flex items-center space-x-4 overflow-hidden">
                  <audio
                    ref={(ref) => (audioRefs.current[file.id] = ref)} // Dynamically assign ref
                    controls
                    className="w-60 z-30"
                    onPlay={(e) => handlePlayAudio(file, e.target)} // Handle play
                  >
                    <source src={file.url} type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                  <span className="h-5 w-[410px] inline-block group-hover:animate-scrollRight overflow-hidden">
                    {file.name}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleAddToFavorites(file)}
                    className="bg-blue-500 p-2 rounded hover:bg-blue-600 transition duration-200"
                  >
                    <FaHeart className="text-white" />
                  </button>
                  <button
                    onClick={() => handleDeleteFile(file)}
                    className="bg-red-500 p-2 rounded hover:bg-red-600 transition duration-200"
                  >
                    <FaTrash className="text-white" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Favorite Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Favorites</h2>
          <ul className="space-y-4 mb-6">
            {favorites.map((file) => (
              <li
                key={file.id}
                className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                <div className="flex items-center space-x-4 relative overflow-hidden">
                  <audio
                    ref={(ref) => (audioRefs.current[file.id] = ref)} // Dynamically assign ref
                    controls
                    className="w-60"
                    onPlay={(e) => handlePlayAudio(file, e.target)} // Handle play
                  >
                    <source src={file.url} type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                  <span className="h-5 w-[410px] inline-block group-hover:animate-scrollRight overflow-hidden">{file.name}</span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleRemoveFromFavorites(file)}
                    className="bg-red-500 p-2 rounded hover:bg-blue-600 transition duration-200"
                  >
                    <FaHeart className="text-white" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </div>
    
  );
};

export default App;

// features and Functionalitites
    //Fully Responsive.
    //User Friendly Interface.
    //Upload audio files in Playlist
    //Keep files for maximum three days after that files will automatically disappear.
    //Mark file as favorite
    //Delete file
    //Remove file from favorite.
    //Audio controls such as volume, playback or skip timelapse.

//Technologies and Libraries used
    //React.js
    //TailwindCSS + custom classes added in TailwindCSS
    //useState, useEffect, useRef Hooks
    //Dropzone for uploading 
    //IndexedDB for managing large audio files
    //Redux for managing states
    //React icons