"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  MapPin,
  Laptop,
  Mail,
  MessageCircle,
  Phone,
  Monitor,
  Database,
  Palette,
  Code,
  Rocket,
  User,
  Briefcase,
  ChevronRight,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl"
      >
        <div className="backdrop-blur-xl bg-white/70 border border-zinc-200/50 rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-zinc-900/5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-zinc-900 text-sm">
              노코드 AI로 앱 만들기
            </span>
          </div>
          <a
            href="https://tally.so/r/GxROlj"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            신청하기
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            초급자 과정 · Beginner Course
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-zinc-900 tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-balance">
              Anyone Can
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Build an App.
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-600 font-semibold leading-relaxed max-w-2xl mx-auto mb-8"
          >
            "썬칩샘, 뭐라도 만들자" 강의 시리즈
            <br className="block" />
            <span className="text-zinc-700 font-medium mt-1 block sm:inline sm:mt-0">
              노코드 AI로 앱 만들기 (초급자 과정)
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-3xl md:text-4xl font-bold text-zinc-800 mb-12"
          >
            왕초보도 전문가로!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://tally.so/r/GxROlj"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center gap-2"
            >
              Register Now · 신청하기
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
              Designed for You.
            </h2>
            <p className="text-xl text-zinc-500">
              이런 분들을 위해 준비했습니다
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            <motion.div
              variants={{
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-zinc-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <User className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">
                Not tech-savvy? No problem.
              </h3>
              <p className="text-zinc-500 text-lg leading-relaxed">
                컴퓨터랑 안 친하신 분도 괜찮습니다. 처음부터 차근차근 알려드릴게요.
              </p>
            </motion.div>

            <motion.div
              variants={{
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-zinc-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-400 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">
                Automate your work.
              </h3>
              <p className="text-zinc-500 text-lg leading-relaxed">
                나만의 앱을 만들어 추후 업무자동화로 연결하세요. 생산성이 달라집니다.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-24 px-6 bg-zinc-100/50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
              Mark Your Calendar.
            </h2>
            <p className="text-xl text-zinc-500">일정을 확인하세요</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {/* Session 1 */}
            <motion.div
              variants={{
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-b from-red-500 to-red-600 rounded-2xl overflow-hidden shadow-lg">
                    <div className="bg-red-600 text-white text-xs font-semibold text-center py-1">
                      FEB
                    </div>
                    <div className="bg-white flex items-center justify-center h-14">
                      <span className="text-3xl font-bold text-zinc-900">7</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-blue-600 font-medium mb-1">
                    Session 1
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">
                    2월 7일 (토요일)
                  </h3>
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Calendar className="w-4 h-4" />
                    <span>5시간 수업</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Session 2 */}
            <motion.div
              variants={{
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-b from-red-500 to-red-600 rounded-2xl overflow-hidden shadow-lg">
                    <div className="bg-red-600 text-white text-xs font-semibold text-center py-1">
                      FEB
                    </div>
                    <div className="bg-white flex items-center justify-center h-14">
                      <span className="text-3xl font-bold text-zinc-900">
                        21
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-blue-600 font-medium mb-1">
                    Session 2
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">
                    2월 21일 (토요일)
                  </h3>
                  <div className="flex items-center gap-2 text-zinc-500">
                    <Calendar className="w-4 h-4" />
                    <span>5시간 수업 (오전 + 오후)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Location & Requirements */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            <motion.div
              variants={{
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 border border-zinc-200/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">Location</h3>
              </div>
              <p className="text-zinc-700 font-medium mb-1">
                OCU 강남캠퍼스 3층
              </p>
              <p className="text-zinc-500 text-sm">잠실역 10번 출구에서 도보 10분 이내</p>
            </motion.div>

            <motion.div
              variants={{
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="backdrop-blur-xl bg-white/70 rounded-3xl p-8 border border-zinc-200/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Laptop className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">준비물</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full text-sm font-medium">
                  💻 노트북
                </span>
                <span className="bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full text-sm font-medium">
                  ✉️ Gmail 계정
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
              What You&apos;ll Learn.
            </h2>
            <p className="text-xl text-zinc-500">커리큘럼 안내</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                step: "01",
                icon: Monitor,
                title: "Setup",
                titleKr: "필수 프로그램 설치(Antigravity, 깃허브 외 다수)",
                color: "from-blue-500 to-blue-600",
              },
              {
                step: "02",
                icon: Database,
                title: "Database Design",
                titleKr: "DB 설계",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                step: "03",
                icon: Palette,
                title: "UI/UX Design",
                titleKr: "앱 디자인(디자인 AI)",
                color: "from-pink-500 to-pink-600",
              },
              {
                step: "04",
                icon: Rocket,
                title: "AI Coding & Deploy",
                titleKr: "AI 코드 작성 및 앱 배포",
                color: "from-orange-500 to-orange-600",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.1 },
                  },
                }}
                className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-100 hover:shadow-lg transition-shadow group"
              >
                <div className="text-sm font-bold text-zinc-300 mb-4">
                  {item.step}
                </div>
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm">{item.titleKr}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Course Fee Section */}
      <section className="py-24 px-6 bg-zinc-100/50">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 tracking-tight mb-4">
              강의료
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-zinc-100 max-w-2xl mx-auto"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <span className="text-lg font-bold text-zinc-900">
                  OCU 재학생 1회 수강료
                </span>
                <span className="text-lg font-bold text-zinc-900">6만원</span>
              </div>
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                <span className="text-lg text-zinc-700">
                  일반 수강생 1회 수강료
                </span>
                <span className="text-lg text-zinc-700">12만원</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg text-zinc-700">
                  일반 수강생{" "}
                  <span className="text-sm text-zinc-500">
                    (강의 일주일 전까지 입금 시)
                  </span>{" "}
                  얼리 버드 수강료
                </span>
                <span className="text-lg font-bold text-blue-600">9만원</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Ready to Build
              <br />
              Your First App?
            </h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-xl mx-auto">
              지금 바로 시작하세요. 당신의 첫 번째 앱이 기다리고 있습니다.
            </p>
            <a
              href="https://tally.so/r/GxROlj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-zinc-100 text-zinc-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              Register Now · 신청하기
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-zinc-900">
                  제공: 썬칩샘 임선집
                </span>
              </div>
              <p className="text-zinc-500 text-sm">
                노코드 AI 앱 빌딩 강사
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://open.kakao.com/me/jasonyimkakao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white border border-zinc-200 px-4 py-2 rounded-full text-sm text-zinc-700 hover:border-zinc-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                jasonyimkakao
              </a>
              <a
                href="mailto:jasonyim@naver.com"
                className="flex items-center gap-2 bg-white border border-zinc-200 px-4 py-2 rounded-full text-sm text-zinc-700 hover:border-zinc-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                jasonyim@naver.com
              </a>
            </div>
          </motion.div>

          <div className="mt-12 pt-8 border-t border-zinc-200 text-center">
            <p className="text-zinc-400 text-sm">
              © 2026 컴퍼스랩. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Dock (Mobile) */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
      >
        <a
          href="https://tally.so/r/GxROlj"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 backdrop-blur-xl bg-zinc-900/90 hover:bg-zinc-800 text-white px-6 py-4 rounded-full shadow-lg shadow-zinc-900/25 font-semibold transition-colors"
        >
          <Sparkles className="w-5 h-5" />
          신청하기
        </a>
      </motion.div>
    </div>
  );
}
