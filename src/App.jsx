// ======== بداية الكود الجديد — مبني حسب الصورة بالضبط ========
import { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const phoneNumber = '96541114604';

  // ده هو الزر الرئيسي اللي في الصورة، بيفتح الواتساب مباشرة — **ما هيتم تعديله**
  const handleOpenApp = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isWhatsAppBrowser = userAgent.includes('whatsapp');

    if (isWhatsAppBrowser || /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
      window.open(`https://wa.me/${phoneNumber}`, '_self');
    } else {
      window.open(`https://wa.me/${phoneNumber}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans" style={{ paddingBottom: '80px' }}>

      {/* ======== الهيدر الصغير في الأعلى — لوجو Basel Academy فقط ======== */}
      <header className="flex justify-center py-3">
        <img src="/logoss.png" alt="Basel Academy" style={{ width: '64px', height: '64px' }} />
      </header>

      {/* ======== الصورة الكبيرة مع شعار باسل ======== */}
      <div className="w-full bg-gray-50 flex flex-col items-center justify-center" style={{ padding: '20px 0' }}>
        <img src="/photo.png" alt="باسل" style={{ width: '300px', height: '300px', objectFit: 'contain', marginBottom: '10px' }} />
      </div>

      {/* ======== الزر الأخضر في المنتصف — ما هيتم تعديله أبدًا ======== */}
      <div className="flex justify-center" style={{ margin: '20px 0' }}>
        <button
          onClick={handleOpenApp}
          className="bg-[#25D366] text-white rounded-full font-bold flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#20BA5A]"
          style={{ width: '280px', height: '50px', fontSize: '15px', fontWeight: '600' }}
        >
تواصل معنا         </button>
      </div>

      {/* ======== عنوان "من برامجنا" ======== */}
      <div className="flex justify-end" style={{ padding: '0 24px', marginBottom: '15px' }}>
        <h2 className="text-gray-800" style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>من برامجنا</h2>
      </div>

      {/* ======== أربعة كروت للبرامج — بس على الموبايل هيظهر اتنين بس ======== */}
      <div className="flex gap-3 justify-between overflow-x-auto" style={{ padding: '0 20px', marginBottom: '20px', maxWidth: '100%' }}>

        {/* كارت 1: صحبة صالحة */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0" style={{ width: '45%', minWidth: '150px' }}>
          <img src="/p1.png" alt="لعب وتنافس" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <p className="text-gray-800 text-center" style={{ fontSize: '12px', fontWeight: '500', padding: '8px 4px' }}>صحبة صالحة </p>
        </div>

        {/* كارت 2: حلقات قرآن */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0" style={{ width: '45%', minWidth: '150px' }}>
          <img src="/p2.png" alt="أجواء صيفية" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <p className="text-gray-800 text-center" style={{ fontSize: '12px', fontWeight: '500', padding: '8px 4px' }}>حلقات قرآن</p>
        </div>

        {/* كارت 3: أجواء صيفية */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0" style={{ width: '45%', minWidth: '150px' }}>
          <img src="/p3.png" alt="حلقات قرآن" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <p className="text-gray-800 text-center" style={{ fontSize: '12px', fontWeight: '500', padding: '8px 4px' }}>آجواء صيفية</p>
        </div>

        {/* كارت 4: لعب وتنافس */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0" style={{ width: '45%', minWidth: '150px' }}>
          <img src="/p4.png" alt="صحية صالحة" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <p className="text-gray-800 text-center" style={{ fontSize: '12px', fontWeight: '500', padding: '8px 4px' }}>لعب و تنافس</p>
        </div>

      </div>

      {/* ======== الزر الأزرق "سجل مشتركين" ======== */}
      <div className="flex justify-center" style={{ marginBottom: '30px' }}>
        <button
          onClick={() => window.open(`https://wa.me/${phoneNumber}?text=أريد التسجيل في البرامج`, '_blank')}
          className="bg-[#3b82f6] text-white rounded-full font-bold flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#2563eb]"
          style={{ width: '320px', height: '54px', fontSize: '16px', fontWeight: '600' }}
        >
          سجل مشتركين
        </button>
      </div>

      {/* ======== شريط التصفح في الأسفل — الزرارين بيفتحوا واتساب ======== */}
      <div className="bg-white border-t border-gray-200 flex justify-around" style={{ position: 'fixed', bottom: '0', left: '0', right: '0', padding: '12px 0', zIndex: '9999' }}>
        <div className="flex flex-col items-center cursor-pointer" onClick={handleOpenApp}>
          <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a4 4 0 014-4h4M8 14a4 4 0 014-4H8m0 8v6m0 0l-2-2m2 2l2-2" />
          </svg>
          <span className="text-gray-600" style={{ fontSize: '11px', marginTop: '4px' }}>الإعدادات</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer" onClick={handleOpenApp}>
          <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '24px', height: '24px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 001 1h3m-6 0a1 1 0 001-1v-4a1 1 0 00-1-1h-2a1 1 0 00-1 1v4a1 1 0 001 1h2z" />
          </svg>
          <span className="text-blue-800" style={{ fontSize: '11px', marginTop: '4px' }}>الرئيسية</span>
        </div>
      </div>

    </div>
  );
}
export default App;
// ======== نهاية الكود ========