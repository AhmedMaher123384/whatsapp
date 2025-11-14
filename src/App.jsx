import { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const phoneNumber = '96541114604';

  // ده هو الزر الرئيسي اللي في الصورة، بيفتح الواتساب مباشرة
  const handleOpenApp = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isWhatsAppBrowser = userAgent.includes('whatsapp');

    if (isWhatsAppBrowser || /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
      window.open(`https://wa.me/${phoneNumber}`, '_self');
    } else {
      window.open(`https://wa.me/${phoneNumber}`, '_blank');
    }
  };

  // ده زر WhatsApp Web
  const handleWhatsAppWeb = () => {
    window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
  };

  // ده زر التحميل
  const handleDownload = () => {
    window.open('https://www.whatsapp.com/download', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* الهيدر - نفس الصورة */}
      <header className="flex items-center justify-between px-10 py-3 border-b border-gray-200">
        <div>
          <img src="/whats.png" alt="WhatsApp" className="w-30 h-30" />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#" className="text-gray-700 hover:text-gray-900">Features</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Privacy</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Help Center</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">For Business</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Apps</a>
        </nav>

        {/* زر Download في الهيدر - هوفر بسيط فقط */}
        <button
          onClick={handleDownload}
          className="bg-[#25D366] text-white px-8 py-3 rounded-full font-medium text-base flex items-center gap-2 cursor-pointer"
          style={{ transition: 'transform 0.2s ease' }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        > 
          download  
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </header>

      {/* المحتوى الرئيسي - يطابق الصورة تمامًا */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] px-6 py-20">
        <div className="max-w-md w-full flex flex-col items-center text-center">
          {/* شعار Basel Academy - مع CSS كلاس للتحكم الكامل */}
          <div className="mb-12">
            <img
              src="/logoss.png"
              alt="Basel Academy"
              className="logo-basel mx-auto"
              // للتحكم في الحجم، غير الكلاس:
              // logo-basel-small (80x80px)
              // logo-basel-medium (100x100px) 
              // logo-basel-large (150x150px)
              // أو استخدم الاستايل المباشر أدناه
              // style={{ width: '100px', height: '100px' }}
            />
          </div>

          {/* اسم المؤسسة */}
          <h1 className="text-xs font-normal text-gray-600 mb-12">
            Basel Academy
          </h1>

          {/* زر Open app - هوفر بسيط فقط */}
          <button
            onClick={handleOpenApp}
            className="bg-[#25D366] text-gray-700 rounded-full font-bold text-3xl mb-4 flex items-center justify-center shadow-2xl cursor-pointer"
            style={{ width: '250px', height: '10px', padding: '20px 20px', fontSize: '14px', fontWeight: '700', transition: 'transform 0.2s ease' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Continue to Chat
          </button>

         

          {/* نص Don't have the app? مع الأيقونة والخط تحت - تم تعديله ليشبه الصورة */}
          <div className="flex items-center gap-2 text-gray-600 text-2xl">
            <img src="/under.png" alt="WhatsApp" className="w-6 h-6" />
            <span>Don't have the app?</span>
            <a
              onClick={handleDownload}
              className="text-green-600 underline hover:text-green-800 font-bold cursor-pointer"
              style={{ textDecorationThickness: '3px', textUnderlineOffset: '3px' }}
            >
              Download it now
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;