import Image from "next/image";

export default function FairePartMariage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-600 via-emerald-400 to-green-600 p-6">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden animate-fadeIn border-8 border-emerald-700 relative">
        
        {/* Image en couverture avec animation */}
        <div className="relative h-80 md:h-96">
          <Image
            src="/love.jpg" // Utilise une image de qualité supérieure
            alt="Le couple Alec et Vendrelle"
            layout="fill"
            objectFit="cover"
            className="animate-zoomIn rounded-t-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-3xl"></div>
          <h1 className="absolute bottom-6 left-0 right-0 text-center font-serif text-6xl font-extrabold text-emerald-300 drop-shadow-2xl animate-glow">
            Alec<span className="text-red-600">&</span> Emeraude
          </h1>
        </div>

        {/* Contenu principal */}
        <div className="p-12 text-center space-y-8 animate-fadeIn bg-gradient-to-b from-white to-green-100 border-t-8 border-emerald-500">
          <p className="text-3xl text-red-700 italic font-light animate-slideUp">
            "L'amour est patient, l'amour est bon. Il n'envie pas, il ne se vante pas, il ne s'enfle pas d'orgueil."
          </p>

          {/* Message principal */}
          <div className="bg-green-100 rounded-xl p-6 shadow-md border-4 border-emerald-600 relative">
            <p className="text-2xl font-semibold text-green-800">
              Le couple Alec et Emeraude est heureux de vous annoncer leur mariage religieux, coutumier et civil prévu cette année.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Votre présence, ainsi que toute aide physique, financière ou matérielle, sera grandement appréciée pour faire de cet événement un moment inoubliable.
            </p>
          </div>

          {/* Description des cérémonies */}
          <div className="bg-green-100 rounded-xl p-6 shadow-md border-4 border-emerald-600">
            <p className="text-2xl font-semibold text-green-800">Nos Cérémonies</p>
            <p className="text-lg text-gray-700 mt-4">
              Le mariage débutera par une cérémonie religieuse suivie d'une cérémonie coutumière traditionnelle. Ensuite, nous aurons la cérémonie civile pour officialiser notre union devant la loi.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Nous serions honorés de vous avoir à nos côtés pour chacune de ces étapes importantes de notre vie.
            </p>
          </div>

          {/* Date et lieu avec GIF animé */}
          <div className="text-white text-3xl font-semibold animate-slideUp bg-green-700 rounded-lg p-6 shadow-lg border-4 border-emerald-500 relative">
            <p className="text-5xl font-extrabold text-amber-300"> 2024</p>
            <p className="text-xl mt-1">📍 Setrag, Owendo</p>
            <Image 
              src="/love1.png" 
              alt="Cœurs animés" 
              width={70} 
              height={70} 
              className="absolute -top-5 right-5 animate-float"
            />
          </div>

          {/* Message aux invités */}
          <p className="text-gray-700 text-lg leading-relaxed animate-fadeIn">
            Chers amis et famille, nous vous invitons à être témoins de ce moment de bonheur et d'unité. 
            Votre présence sera la plus belle des contributions, et ensemble, nous ferons de cette journée une célébration pleine d'amour et de joie.
          </p>

          {/* Dress Code */}
          <div className="border-t border-b border-green-700 py-4 animate-pulse bg-green-200 rounded-lg shadow-md p-4">
            <p className="text-xl font-semibold text-green-900">🎩 Dress Code</p>
            <p className="text-gray-700">Tenue de soirée élégante</p>
          </div>
        </div>
      </div>
    </div>
  );
}
