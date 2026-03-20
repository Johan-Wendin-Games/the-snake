export const CARDS = [
  { emoji: '🍪', label: 'Aktivitet ihop', text: 'Vi bakar kakor eller muffins tillsammans idag!', color: '#fde8c8' },
  { emoji: '🎬', label: 'Mysigt', text: 'Du får välja vilken film vi tittar på ikväll!', color: '#d4edda' },
  { emoji: '🧩', label: 'Kul ihop', text: 'Vi spelar ditt favoritspel tillsammans – du väljer!', color: '#d6eaff' },
  { emoji: '🤗', label: 'Gosigt', text: '10 minuters extra kram- och mysstund med mamma/pappa!', color: '#ffd6e7' },
  { emoji: '🎨', label: 'Aktivitet ihop', text: 'Vi ritar eller målar något roligt tillsammans!', color: '#e8d5ff' },
  { emoji: '🍦', label: 'Godis!', text: 'Du får välja en liten godissak eller glass!', color: '#fff3b0' },
  { emoji: '🏃', label: 'Kul ihop', text: 'Vi går till lekplatsen eller parken – du väljer!', color: '#c9f0e8' },
  { emoji: '📖', label: 'Mysigt', text: 'Du får välja 2 extra böcker till sänggåendet ikväll!', color: '#ffe0e0' },
  { emoji: '🫧', label: 'Aktivitet ihop', text: 'Vi blåser såpbubblor tillsammans utomhus!', color: '#dff2c1' },
  { emoji: '🏗️', label: 'Kul ihop', text: 'Vi bygger något stort med Lego eller klossar tillsammans!', color: '#fde8c8' },
  { emoji: '🛁', label: 'Mysigt', text: 'Extra långt bad med leksaker och skum!', color: '#d4edda' },
  { emoji: '💃', label: 'Aktivitet ihop', text: 'Vi dansar till dina favoritlåtar tillsammans!', color: '#d6eaff' },
  { emoji: '🐾', label: 'Gosigt', text: 'Vi bygger ett mysbo av kuddar och filtar och kryper in!', color: '#ffd6e7' },
  { emoji: '🌳', label: 'Kul ihop', text: 'Vi utforskar naturen och letar efter sniglar, insekter eller stenar!', color: '#e8d5ff' },
  { emoji: '🎭', label: 'Aktivitet ihop', text: 'Vi leker låtsaslek – du bestämmer vad vi ska vara!', color: '#fff3b0' },
  { emoji: '🌙', label: 'Mysigt', text: 'Du får stanna uppe 15 minuter extra ikväll!', color: '#c9f0e8' },
  { emoji: '🎤', label: 'Kul ihop', text: 'Vi sjunger dina favoritlåtar högt tillsammans!', color: '#ffe0e0' },
  { emoji: '🥞', label: 'Aktivitet ihop', text: 'Du får hjälpa till att laga frukost eller mellanmål – du väljer vad!', color: '#dff2c1' },
]

export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
