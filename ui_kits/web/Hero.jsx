// Hero.jsx — homepage intro
function Hero() {
  return (
    <section style={{ padding: '80px 0 48px', maxWidth: 720 }}>
      <div style={{ fontSize: 13, color: 'var(--fg-3)', marginBottom: 16, letterSpacing: '0.02em' }}>
        FRONTEND · SEOUL
      </div>
      <h1 style={{
        fontSize: 44, lineHeight: 1.25, fontWeight: 700,
        letterSpacing: '-0.02em', margin: 0,
      }}>
        한 화면에 하나의 핵심,<br />
        <span style={{ color: 'var(--primary-600)' }}>코리안심슨</span>이 만드는 인터페이스.
      </h1>
      <p style={{
        fontSize: 17, lineHeight: 1.6, color: 'var(--fg-2)',
        marginTop: 20, maxWidth: 580,
      }}>
        에러는 책망이 아닌 안내라고 믿어요.
        토스의 사고방식을 빌려, 개인 사이드 프로젝트를 정리한 공간이에요.
      </p>
      <div style={{ display: 'flex', gap: 8, marginTop: 28 }}>
        <Button variant="primary">프로젝트 보기</Button>
        <Button variant="secondary">이메일 보내기</Button>
      </div>
    </section>
  );
}
window.Hero = Hero;
