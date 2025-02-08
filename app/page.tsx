import Image from "next/image";

export default function FairePartMariage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-500 via-amber-400 to-emerald-600 p-6">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl overflow-hidden animate-fadeIn border-8 border-emerald-700 relative">
        
        {/* Image en couverture avec animation */}
        <div className="relative h-80 md:h-96">
          <Image
            src="/love.jpg"
            alt="Alec et Vendrelle"
            layout="fill"
            objectFit="cover"
            className="animate-zoomIn"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <h1 className="absolute bottom-6 left-0 right-0 text-center text-white font-serif text-6xl md:text-7xl font-extrabold text-emerald-300 drop-shadow-2xl animate-glow">
            Alec <span className="text-red-600">&</span> Vendrelle
          </h1>
        </div>

        {/* Contenu principal */}
        <div className="p-8 md:p-12 text-center space-y-6 md:space-y-8 animate-fadeIn bg-gradient-to-b from-white to-emerald-100 border-t-8 border-emerald-500">
          <p className="text-xl md:text-2xl text-amber-700 opacity-100 italic font-light animate-slideUp">
            "L'amour est patient, l'amour est bon. Il n'envie pas, il ne se vante pas, il ne s'enfle pas d'orgueil."
          </p>

          {/* Date et lieu avec GIF animé */}
          <div className="text-white text-3xl font-semibold animate-slideUp bg-emerald-700 rounded-lg p-6 shadow-lg border-4 border-emerald-500 relative">
            <p className="text-5xl font-extrabold text-amber-300">26 Juin 2024</p>
            <p className="text-lg mt-1">📍 Setrag, Owendo</p>
            <Image 
              src="/love1.png" 
              alt="Cœurs animés" 
              width={70} 
              height={70} 
              className="absolute -top-5 right-5 animate-float"
            />
          </div>

          {/* Message aux invités */}
          <p className="text-amber-700 text-lg md:text-xl leading-relaxed animate-fadeIn">
            Chers amis et famille, nous sommes ravis de partager ce moment unique avec vous. 
            Votre présence sera le plus beau des cadeaux. Cependant, nous savons qu’un mariage est avant tout une aventure collective. 
            Si vous souhaitez contribuer d’une manière ou d’une autre – que ce soit par un soutien matériel, financier ou spirituel – 
            votre aide sera précieuse et grandement appréciée. Rejoignez-nous pour une journée remplie d’amour et de célébration.
          </p>

          {/* Dress Code */}
          <div className="border-t border-b border-emerald-700 py-4 animate-pulse bg-emerald-200 rounded-lg shadow-md p-4">
            <p className="text-xl font-semibold text-emerald-900">🎩 Dress Code</p>
            <p className="text-gray-700">Tenue de soirée élégante</p>
          </div>

          {/* Confirmation avec effet doré */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-700 text-white py-6 px-10 rounded-xl shadow-xl animate-bounce border-4 border-emerald-800">
            <p className="text-lg font-bold">Merci de confirmer votre présence avant le 1er mai 2024</p>
            <p className="text-sm mt-2">📧 contact@alecetvendrelle.com | 📞 241 692348 / 74162584</p>
          </div>
        </div>
      </div>
    </div>
  );
}
