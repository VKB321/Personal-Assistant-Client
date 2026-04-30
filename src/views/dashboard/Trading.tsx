export default function Trading() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-2">Trading dashboard</h1>
      <p className="text-gray-400 mb-3">
        Live (delayed) quotes, candlestick charts, and technical indicators (RSI, MACD, MA).
        Coming online in Phase 5.
      </p>
      <div className="text-xs text-yellow-300 bg-yellow-900/30 border border-yellow-700 rounded p-3">
        Reminder: this dashboard is educational analysis only. It is not investment advice and
        makes no accuracy guarantees. Markets carry risk; consult a SEBI-registered advisor
        before trading.
      </div>
    </div>
  );
}
