import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Top = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center bg-[#fcfaf5]">
        {/* Background Image with Mask */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1600"
            alt="Modern Office Building"
            className="w-full h-full object-cover opacity-80"
            style={{ filter: 'grayscale(15%) sepia(5%) brightness(0.9)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fcfaf5] via-[#fcfaf5]/60 to-transparent"></div>
        </div>

        {/* Vertical Text Overlay (Design Element) */}
        <div className="absolute top-0 right-10 h-full py-20 hidden lg:flex flex-col justify-between z-10 pointer-events-none opacity-40 select-none">
          <div className="writing-vertical text-xs font-serif tracking-[0.5em] text-stone-400">
            持続可能な未来へ
          </div>
          <div className="w-[1px] h-32 bg-stone-300 mx-auto"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-4xl">
            <div className="mb-8 fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="inline-block py-1 px-3 border border-[#1e3a5f] text-[#1e3a5f] text-xs font-bold tracking-widest mb-6 bg-white/50">
                Is Link Co., Ltd.
              </span>
              <h1 className="text-5xl md:text-8xl font-zen font-black text-stone-900 leading-tight tracking-wide mb-8">
                <span className="block mb-2">未来を創る、</span>
                <span className="block text-4xl md:text-7xl ml-4 md:ml-12 opacity-80">
                  確かな技術と情熱。
                </span>
              </h1>
            </div>

            <p
              className="text-lg md:text-xl text-stone-600 max-w-lg mb-12 leading-loose font-medium tracking-wider border-l-4 border-[#b93a32] pl-6 fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              建設、エネルギー、モータースポーツ。
              <br />
              多角的な視点から、社会の基盤を支え、
              <br />
              革新を推進する。
            </p>

            <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Link
                to="/business"
                className="group inline-flex items-center px-8 py-4 bg-[#1e3a5f] hover:bg-[#152a45] text-white rounded-sm shadow-lg transition-all duration-500"
              >
                <span className="font-zen font-bold tracking-widest">
                  事業内容を見る
                </span>
                <span className="ml-4 w-6 h-[1px] bg-white/50 group-hover:w-10 transition-all"></span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Vertical Layout Adjusted for Alignment */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            {/* Title Side: Fixed alignment with top-0 or small negative margin to match line-height */}
            <div className="md:w-1/3 relative flex md:justify-end">
              <h2 className="text-4xl md:text-5xl font-zen font-black text-stone-900 leading-tight writing-vertical border-l md:border-l-0 md:border-r border-[#b93a32] pl-4 md:pr-8 pt-1 md:pt-0">
                社会インフラの
                <br />
                未来を描く
              </h2>
              <span className="absolute -top-10 -left-4 md:left-auto md:-right-8 text-9xl font-serif text-stone-100 -z-10 font-bold opacity-70 select-none">
                01
              </span>
            </div>
            
            {/* Content Side: Ensure top alignment with the title text */}
            <div className="md:w-2/3">
              <p className="text-lg leading-loose text-stone-600 font-medium mb-10 text-justify">
                株式会社アイズリンクは、人々の生活と産業活動に不可欠な「基盤」を構築・維持するプロフェッショナル集団です。
                私たちは、ビルメンテナンスから再生可能エネルギー、特殊な地質調査、そして最先端のモータースポーツ技術まで、
                幅広い領域で培った専門知識と情熱を結集し、持続可能な社会の実現に貢献します。
              </p>
              <div className="relative group overflow-hidden shadow-2xl rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                  alt="Infrastructure"
                  className="w-full h-64 md:h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 border border-black/5 group-hover:border-black/0 transition-colors pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-[#fcfaf5] mb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <span className="text-[#b93a32] font-bold tracking-[0.2em] text-xs uppercase mb-4 block font-sans">
                Our Business
              </span>
              <h2 className="text-4xl font-zen font-bold text-stone-900">
                事業内容
              </h2>
            </div>
            <Link
              to="/business"
              className="hidden md:flex items-center text-stone-500 hover:text-[#1e3a5f] transition-colors font-medium group text-sm tracking-widest"
            >
              すべての事業を見る{' '}
              <span className="ml-3 w-8 h-[1px] bg-stone-400 group-hover:bg-[#1e3a5f] transition-colors"></span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {SERVICES.slice(0, 3).map((service) => (
              <Link to={service.path} key={service.id} className="group block">
                <div className="relative overflow-hidden mb-6 shadow-md border-b-4 border-[#1e3a5f]/0 group-hover:border-[#b93a32] transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 saturate-50 group-hover:saturate-100"
                    />
                  </div>
                  {/* Sumi Overlay */}
                  <div className="absolute inset-0 bg-[#1a1a1a]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="pr-4">
                  <h3 className="text-xl font-zen font-bold text-stone-900 mb-4 group-hover:text-[#1e3a5f] transition-colors whitespace-pre-line leading-relaxed">
                    {service.title.replace('\n', '')}
                  </h3>
                  <p className="text-stone-500 text-sm leading-7 line-clamp-3 font-light">
                    {service.content}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center md:hidden">
            <Link
              to="/business"
              className="inline-block border border-stone-800 px-8 py-3 text-stone-800 font-bold text-sm tracking-widest hover:bg-stone-800 hover:text-white transition-colors"
            >
              全事業一覧
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Top;
