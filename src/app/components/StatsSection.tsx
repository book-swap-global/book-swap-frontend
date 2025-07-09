export type Stats = {
  booksExchanged: number;
  activeUsers: number;
  satisfactionRate: number;
  citiesCovered: number;
};

const defaultStats: Stats = {
  booksExchanged: 50000,
  activeUsers: 15000,
  satisfactionRate: 98,
  citiesCovered: 200,
};

export default function StatsSection({ stats = defaultStats }: { stats?: Stats }) {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 py-10 bg-white text-center text-blue-900 font-semibold text-lg">
      <div>
        <div className="text-2xl font-bold">{stats.booksExchanged.toLocaleString()}+</div>
        <div className="text-sm font-normal text-gray-500">Books Exchanged</div>
      </div>
      <div>
        <div className="text-2xl font-bold">{stats.activeUsers.toLocaleString()}+</div>
        <div className="text-sm font-normal text-gray-500">Active Users</div>
      </div>
      <div>
        <div className="text-2xl font-bold">{stats.satisfactionRate}%</div>
        <div className="text-sm font-normal text-gray-500">Satisfaction Rate</div>
      </div>
      <div>
        <div className="text-2xl font-bold">{stats.citiesCovered}+</div>
        <div className="text-sm font-normal text-gray-500">Cities Covered</div>
      </div>
    </section>
  );
} 