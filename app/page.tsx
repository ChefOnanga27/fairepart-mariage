import Image from "next/image";

export default function FairePartMariage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-600 via-emerald-400 to-green-600 p-6">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden animate-fadeIn border-8 border-green-800 relative">
        
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
          <h1 className="absolute bottom-6 left-0 right-0 text-center font-serif text-7xl font-extrabold text-emerald-500 drop-shadow-2xl animate-glow">
            Alec <span className="text-red-600">&</span> Vendrelle
          </h1>
        </div>

        {/* Contenu principal */}
        <div className="p-12 text-center space-y-8 animate-fadeIn bg-gradient-to-b from-white to-green-100 border-t-8 border-emerald-500">
          <p className="text-3xl text-red-700 italic font-light animate-slideUp">
            "L'amour est patient, l'amour est bon. Il n'envie pas, il ne se vante pas, il ne s'enfle pas d'orgueil."
          </p>

          {/* Date et lieu avec GIF animé */}
          <div className="text-white text-3xl font-semibold animate-slideUp bg-green-700 rounded-lg p-6 shadow-lg border-4 border-emerald-500 relative">
            <p className="text-5xl font-extrabold text-amber-300">26 Juin 2024</p>
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
            Le couple Alec et Vendrelle est heureux de vous faire part de leur union à travers trois cérémonies : 
            le mariage religieux, le mariage coutumier et le mariage civil, qui se dérouleront cette année. 
            Ce moment important de nos vies serait incomplet sans la présence de ceux qui nous sont chers. 
            Votre participation, qu'elle soit physique, financière ou matérielle, serait une précieuse contribution à la réussite de cet événement. 
            Nous comptons sur votre soutien et votre présence pour célébrer cette journée inoubliable.
          </p>

          {/* Dress Code */}
          <div className="border-t border-b border-green-700 py-4 animate-pulse bg-green-200 rounded-lg shadow-md p-4">
            <p className="text-xl font-semibold text-green-900">🎩 Dress Code</p>
            <p className="text-gray-700">Tenue de soirée élégante</p>
          </div>

          {/* Confirmation avec effet doré */}
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white py-6 px-10 rounded-xl shadow-xl animate-bounce border-4 border-green-800">
            <p className="text-lg font-bold">Merci de confirmer votre présence avant le 1er mai 2024</p>
            <p className="text-sm mt-2">📧 nangbiteghe@gmail.com | 📞 241 74692348 / 74162584</p>
          </div>
        </div>
      </div>
    </div>
  );
}
