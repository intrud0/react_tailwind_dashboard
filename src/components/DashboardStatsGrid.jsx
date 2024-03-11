import { FcCloth } from "react-icons/fc";
export default function DashboardStatsGrid() {
  return (
    <div className="flex w-full gap-4">
      <Wrapper>
        <div>
          <FcCloth fontSize={60} />
        </div>
        <div>
          <p className="text-gray-500">Total Orders</p>
          <h2 className="text-2xl font-semibold">100</h2>
        </div>
      </Wrapper>
      <Wrapper>b</Wrapper>
      <Wrapper>c</Wrapper>
      <Wrapper>d</Wrapper>
    </div>
  );
}

function Wrapper({ children }) {
  return (
    <div className="flex items-center flex-1 p-4 bg-white border border-gray-200 rounded-sm">
      {children}
    </div>
  );
}
