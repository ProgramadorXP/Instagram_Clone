const suggestions = [
  {
    id: 1,
    username: "aariabot",
    info: "Followed by sergiovizcarr + 1 more",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 2,
    username: "angie_przpal",
    info: "Followed by eduardoacosta20",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 3,
    username: "ride.or.die26",
    info: "Followed by sammy_olivas18",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 4,
    username: "instagram",
    info: "Followed by saritaonline + 33 more",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    verified: true,
  },
  {
    id: 5,
    username: "trejo_angelita",
    info: "Followed by vidaleduardo57 + more",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
];

export default function UserSuggestions() {
  return (
    <aside className="hidden [@media(min-width:1160px)]:block w-[450px] pl-16 p-4 text-sm text-gray-600">
      {/* Perfil */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm font-semibold">jonyvilla</p>
            <p className="text-gray-400 text-xs">Jonhatan Villalobos</p>
          </div>
        </div>
        <button className="text-xs font-semibold text-blue-500">Switch</button>
      </div>

      {/* Sugerencias */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-400 text-sm">Suggested for you</p>
        <button className="text-xs font-semibold">See All</button>
      </div>

      <div className="space-y-4 mb-6">
        {suggestions.map((s) => (
          <div key={s.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={s.avatar}
                alt={s.username}
                className="w-9 h-9 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-semibold flex items-center">
                  {s.username}
                  {s.verified && <span className="ml-1 text-blue-500">✔️</span>}
                </p>
                <p className="text-xs text-gray-400">{s.info}</p>
              </div>
            </div>
            <button className="text-xs font-semibold text-blue-500">
              Follow
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-[11px] text-gray-400 space-y-2">
        <p>
          About · Help · Press · API · Jobs · Privacy · Terms · Locations ·
          Language · Meta Verified
        </p>
        <p>© 2025 INSTAGRAM FROM META</p>
      </div>
    </aside>
  );
}
