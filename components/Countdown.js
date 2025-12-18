import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0, expired: false
  });

  useEffect(() => {
    const targetDate = new Date("2026-01-10T00:00:00-03:00");

    function tick() {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        expired: false,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }

    // chama uma vez no início
    tick();

    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px", fontWeight: "bold", color: "#5D4037" }}>
      {timeLeft.expired ? (
        <p>🎉 Chegou o grande dia da festa! 🎉</p>
      ) : (
        <p>
          Faltam {timeLeft.days} dias, {timeLeft.hours} horas, {timeLeft.minutes} minutos e {timeLeft.seconds} segundos para a festa!
        </p>
      )}
    </div>
  );
}
