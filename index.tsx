import React, { useState } from 'react';
import { Menu, X, Rocket, Lightbulb, Award, ArrowRight, Check } from 'lucide-react';

export default function MobilityCoachLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold text-gray-800">
              로컬 모빌리티 아이디어 코치
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('problem')} className="text-gray-600 hover:text-sky-500 transition-colors">문제</button>
              <button onClick={() => scrollToSection('solution')} className="text-gray-600 hover:text-sky-500 transition-colors">솔루션</button>
              <button onClick={() => scrollToSection('benefits')} className="text-gray-600 hover:text-sky-500 transition-colors">혜택</button>
              <button onClick={() => scrollToSection('trust')} className="text-gray-600 hover:text-sky-500 transition-colors">신뢰</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-sky-500 transition-colors">가격</button>
              <button onClick={() => scrollToSection('cta')} className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-5 py-2.5 rounded-full hover:shadow-lg transition-all duration-300">
                신청하기
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-600">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pb-4 space-y-4 border-t border-gray-100 pt-6">
              <button onClick={() => scrollToSection('problem')} className="block w-full text-left py-2 text-gray-600">문제</button>
              <button onClick={() => scrollToSection('solution')} className="block w-full text-left py-2 text-gray-600">솔루션</button>
              <button onClick={() => scrollToSection('benefits')} className="block w-full text-left py-2 text-gray-600">혜택</button>
              <button onClick={() => scrollToSection('trust')} className="block w-full text-left py-2 text-gray-600">신뢰</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left py-2 text-gray-600">가격</button>
              <button onClick={() => scrollToSection('cta')} className="block w-full bg-gradient-to-r from-sky-500 to-blue-500 text-white px-5 py-3 rounded-full text-center mt-4">
                신청하기
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block bg-sky-50 text-sky-600 px-4 py-2 rounded-full text-sm font-medium">
              미래형 모빌리티 설계 워크숍
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            혹시 모빌리티를<br />
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">'자동차'</span>로만 정의했나요?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            지역 연구단지에서 고정관념을 깨는<br className="md:hidden" />
            미래형 모빌리티를 직접 설계하세요
          </p>
          <button 
            onClick={() => scrollToSection('cta')}
            className="inline-flex items-center bg-gradient-to-r from-sky-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            워크숍 둘러보기
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              정해진 진로 루트가<br />
              당신의 미래를 고립시키고 있습니다
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              10-20대 학생들의 폭넓은 고민과 관념 확장을 막는<br />
              가장 큰 장애물은 '경험의 부재'입니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-6">🛑</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">고정 관념</h3>
              <p className="text-gray-600 leading-relaxed">
                세상의 기술과 직업을 교과서나 미디어 속 이미지로만 학습합니다
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-6">🧭</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">나침반 실종</h3>
              <p className="text-gray-600 leading-relaxed">
                내가 가진 '꼼꼼함'이나 '집중력' 같은 강점을 어디에 적용해야 할지 모릅니다
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-5xl mb-6">🏭</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">자원 미활용</h3>
              <p className="text-gray-600 leading-relaxed">
                지역의 연구기관, 산업단지라는 거대한 자원이 나에게는 닫힌 공간입니다
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-3xl border border-red-100">
            <p className="text-gray-700 text-lg leading-relaxed">
              💬 "우리 지역에 첨단 기술이 있어도, 나와는 상관없는 어른들의 영역처럼 느껴집니다"
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
                로컬 모빌리티 아이디어 코치
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              아이디어를 코칭하고 실현합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-10 rounded-3xl border border-sky-100">
              <Lightbulb className="text-sky-500 mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">핵심 가치 제안</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                고정관념을 깨는 '미래형 모빌리티 설계 워크숍'을 통해 아이디어를 구체화하고, 진로 탐색의 폭을 압도적으로 넓혀줍니다
              </p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-10 rounded-3xl border border-sky-100">
              <Rocket className="text-sky-500 mb-6" size={48} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">차별점</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                단순 진로 체험이 아닌, 친환경 모빌리티 엔진 지식을 바탕으로 한 실제 산업 연계형 아이디어 코칭을 제공합니다
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white p-12 rounded-3xl text-center">
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
              자율운항시스템공학 지식과 집중력을 가진 코치가<br />
              지역의 산업단지 자원을 활용하여 여유롭고 숨 쉴 공간이 트인 환경에서<br />
              아이디어를 자유롭게 발상할 수 있도록 돕습니다
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              당신의 잠재 관념을<br />
              현실로 만드는 3가지 코칭
            </h2>
            <p className="text-lg text-gray-600">
              체계적인 프로그램으로 아이디어를 현실화합니다
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-sky-500 to-blue-500 text-white rounded-2xl w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">미래형 모빌리티 설계 워크숍</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    지역 산업단지 시설을 활용한 4차 산업 모빌리티(드론, 자율주행, 친환경 선박) 아이디어 발상 및 설계 집중 교육
                  </p>
                  <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100">
                    <div className="flex items-start gap-3">
                      <Check className="text-sky-500 flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-700 leading-relaxed">
                        '기술'에 대한 막연한 두려움을 없애고, 나만의 포트폴리오를 창의적으로 만듭니다
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-2xl w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">고정관념 브레이킹 멘토링</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    나의 전공 지식과 강점(집중력, 꼼꼼함)을 활용하여, '정해진 길'을 벗어난 새로운 진로의 가능성을 1:1로 코칭
                  </p>
                  <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                    <div className="flex items-start gap-3">
                      <Check className="text-red-500 flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-700 leading-relaxed">
                        진로 탐색의 폭을 넓히고, 나의 핵심 강점을 미래 직업에 연결하는 구체적인 방법을 배웁니다
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-sky-500 to-blue-500 text-white rounded-2xl w-14 h-14 flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">MVP(최소 실행) 견학/실습</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    아이디어를 '최소 실행 가능 제품' 단계까지 구상하고, 협력 연구소 견학을 통해 실제 구현의 과정을 체험
                  </p>
                  <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100">
                    <div className="flex items-start gap-3">
                      <Check className="text-sky-500 flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-700 leading-relaxed">
                        이론과 실제의 간극을 줄여주며, 실제 전문가가 되는 로드맵을 조기에 확보합니다
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              지역 산업과 교육 당국이<br />
              인정한 전문 프로그램
            </h2>
            <p className="text-lg text-gray-600">
              검증된 교육 환경을 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-10 rounded-3xl text-center border border-sky-100">
              <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Award className="text-sky-500" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">MVP 검증</h3>
              <p className="text-gray-600 leading-relaxed">
                초기 프로그램은 학교 동아리를 대상으로 운영하며, 교육 효과와 학생 만족도를 검증했습니다
              </p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-10 rounded-3xl text-center border border-sky-100">
              <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Lightbulb className="text-sky-500" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">협력 기관</h3>
              <p className="text-gray-600 leading-relaxed">
                지역 내 연구, 산업단지와 긴밀하게 협력하여 첨단 시설 견학 및 현직 전문가 멘토링 기회를 제공합니다
              </p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-10 rounded-3xl text-center border border-sky-100">
              <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Rocket className="text-sky-500" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">지속 가능성</h3>
              <p className="text-gray-600 leading-relaxed">
                지자체 및 교육청 연계 청소년 진로 체험 프로그램 사업 수주 및 연구단지 기업의 CSR 활동 연계로 안정적 운영
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              초기 런칭 특별 가격
            </h2>
            <p className="text-lg text-gray-600">
              1기 런칭 특별 할인가로 제공합니다
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white p-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">미래 모빌리티 설계 워크숍</h3>
              <p className="text-sky-100 text-lg">총 4주 프로그램 · 1기 특별 할인</p>
            </div>

            <div className="p-10">
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center pb-6 border-b border-gray-100">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">미래 모빌리티 설계 워크숍</h4>
                    <p className="text-gray-500 text-sm">총 4주 집중 교육</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 line-through text-sm">400,000원</p>
                    <p className="text-sky-600 font-bold text-2xl">320,000원</p>
                  </div>
                </div>

                <div className="flex justify-between items-center pb-6 border-b border-gray-100">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">연구단지 시설 견학 및 멘토링</h4>
                    <p className="text-gray-500 text-sm">현장 전문가 멘토링 포함</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 line-through text-sm">100,000원</p>
                    <p className="text-green-600 font-bold text-xl">무료 포함</p>
                  </div>
                </div>

                <div className="flex justify-between items-center pb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">지속적인 진로 컨설팅</h4>
                    <p className="text-gray-500 text-sm">수료 후 3개월간 팔로우업</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">(별도 문의)</p>
                    <p className="text-green-600 font-bold text-xl">무료 제공</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl mb-8 border border-yellow-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-2">💰 총 180,000원 혜택</p>
                  <p className="text-gray-600">할인 80,000원 + 무료 포함 100,000원</p>
                </div>
              </div>

              <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-sky-600 font-semibold">📌 신청 대상</span>
                  <p className="text-gray-700">모빌리티 및 기술 진로에 관심 있는 10-20대 학생</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-semibold">⏰ 마감 안내</span>
                  <p className="text-gray-700">선착순 마감</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-28 px-6 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            당신의 아이디어가 멈춘 곳이 있다면,<br />
            로컬 모빌리티 아이디어 코치가<br />
            길을 제시합니다
          </h2>
          <p className="text-lg md:text-xl mb-12 leading-relaxed opacity-90 max-w-3xl mx-auto">
            고정된 관념을 깨고, 지역의 첨단 자원을 활용하여 나만의 미래 모빌리티를 설계해 보십시오.<br />
            이는 단순한 진로가 아닌, 지역 산업과 미래를 잇는 핵심 인력으로 성장할 첫걸음입니다.
          </p>
          <button className="inline-flex items-center bg-white text-sky-600 px-10 py-5 rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            고정관념을 깨는 모빌리티 워크숍 신청하기
            <ArrowRight className="ml-3" size={24} />
          </button>
          
          <div className="mt-16 pt-12 border-t border-white/20">
            <p className="text-white/70 mb-2">문의: contact@localmobilitycoach.com</p>
            <p className="text-white/60 text-sm">© 2025 로컬 모빌리티 아이디어 코치. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}