import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-[#1a1a1a] text-white py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-stone-800"
          style={{
            backgroundImage: 'radial-gradient(#444 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            opacity: 0.2,
          }}
        ></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-zen font-bold mb-4 tracking-widest">
            お問い合わせ
          </h1>
          <p className="text-stone-500 font-sans tracking-[0.3em] uppercase">
            Contact Us
          </p>
        </div>
      </div>

      <div className="py-32 bg-[#fcfaf5]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-zen font-bold text-stone-900 mb-6 tracking-wider">
                お電話・メールでのご連絡
              </h2>
              <div className="w-16 h-1 bg-[#b93a32] mx-auto mb-8"></div>
              <p className="text-stone-600 leading-loose font-light max-w-2xl mx-auto">
                当社の事業に関するご質問やご相談、また採用に関するお問い合わせは、
                <br />
                下記の窓口よりお気軽にご連絡ください。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phone Card */}
              <div className="bg-white p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border-t-4 border-[#1e3a5f] flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-500">
                <div className="w-16 h-16 bg-[#1e3a5f]/5 rounded-full flex items-center justify-center text-[#1e3a5f] mb-8">
                  <Phone size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-stone-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  Phone
                </h3>
                <p className="text-4xl font-serif text-stone-900 tracking-wider mb-6">
                  {COMPANY_INFO.phone}
                </p>
                <div className="flex items-center gap-2 text-stone-500 text-sm">
                  <Clock size={14} className="text-[#b93a32]" />
                  <span>受付時間: 平日 9:00 - 17:00</span>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border-t-4 border-[#b93a32] flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-500">
                <div className="w-16 h-16 bg-[#b93a32]/5 rounded-full flex items-center justify-center text-[#b93a32] mb-8">
                  <Mail size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-stone-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  Email
                </h3>
                <p className="text-xl font-bold text-stone-900 tracking-wider mb-6 break-all">
                  {COMPANY_INFO.email}
                </p>
                <p className="text-stone-500 text-sm">
                  24時間受付中 (順次回答いたします)
                </p>
              </div>
            </div>

            <div className="mt-16 bg-white p-8 md:p-12 border border-stone-100 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-stone-50 text-stone-400 rounded-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-zen font-bold text-stone-900 tracking-wider">
                    所在地
                  </h4>
                  <p className="text-stone-500 text-sm">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  COMPANY_INFO.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#1e3a5f] text-white px-8 py-3 rounded-sm font-zen font-bold tracking-widest text-sm hover:bg-[#b93a32] transition-colors"
              >
                地図を開く
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
