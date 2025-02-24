"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FairePartMariage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 space-y-8">
      
      {/* Section 1 - Annonce avec image de fond */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl text-center text-white py-12 px-6 rounded-lg shadow-lg bg-cover bg-center relative"
        style={{ backgroundImage: "url('/emeraude.jpg')" }}
      >
        {/* Overlay pour lisibilité */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

        {/* Contenu */}
        <div className="relative z-10 bg-green-100/40">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-red-500 drop-shadow-lg">
            Une Grande Nouvelle !
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-light drop-shadow-md">
            L’amour unit les cœurs, et aujourd’hui, nous avons l’immense bonheur de partager avec vous 
            un événement unique. Une union sacrée, un engagement éternel...
          </p>
          <p className="mt-6 font-semibold text-2xl drop-shadow-lg">Alec & Vendrelle</p>
        </div>
      </motion.div>

      {/* Section 2 - Invitation et demande de soutien */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full max-w-4xl bg-white/50 shadow-lg rounded-lg p-6 border border-emerald-500 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-red-700 mb-4 drop-shadow-md">
          Un Engagement Sacré
        </h2>
        <p className="text-gray-700 text-md sm:text-lg">
          Alec & Vendrelle s’unissent devant Dieu pour célébrer leur amour et s’engager dans une 
          vie remplie de bonheur et de bénédictions.
        </p>
        <p className="mt-4 text-gray-800 font-semibold">
          Nous avons besoin de votre soutien : matériel, financier et surtout spirituel. 
          Chaque geste, chaque prière compte pour nous accompagner dans cette belle aventure.
        </p>

        {/* Image animée et responsive */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 flex justify-center"
        >
          <Image
            src="/love4.jpg"
            alt="Prières et bénédictions"
            width={500}
            height={300}
            className="rounded-lg shadow-md w-full sm:w-[500px]"
          />
        </motion.div>
      </motion.div>

      {/* Section 3 - Date, lieu et remerciements */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 border border-emerald-500 text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-emerald-900 mb-4 drop-shadow-md">
          Les Informations
        </h2>
        <p className="text-gray-700 text-md sm:text-lg">
          La cérémonie aura lieu au 
          <span className="font-semibold text-emerald-800"> Palais Lumière</span>, 
          à <span className="font-semibold">Setrag, Owendo</span>.
        </p>
        <p className="mt-2 font-semibold text-xl sm:text-2xl text-red-600 drop-shadow-md">
          16 août 2025 - 16h00
        </p>
        <p className="text-gray-600 text-sm sm:text-md mt-4">
          Nous serions honorés de vous compter parmi nous.
        </p>

        {/* Image animée */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 flex justify-center"
        >
          <Image
            src="/love3.jpg"
            alt="Lieu de la cérémonie"
            width={500}
            height={300}
            className="rounded-lg shadow-md w-full sm:w-[500px]"
          />
        </motion.div>

        <p className="mt-6 text-gray-700 italic">Avec amour et gratitude,</p>
        <p className="text-emerald-900 font-semibold text-lg sm:text-xl drop-shadow-md">
          Alec & Vendrelle
        </p>
      </motion.div>
      
    </div>
  );
}
