import ParaLayout from "../components/paragraphLayout";

export default function Race() {
  return (
    <div className="background w-screen h-screen flex justify-center">

        <ParaLayout/>

      <style JSX>{`
        .background{
            background: url("/mountain.jpg");
        }
        `}</style>
    </div>
  );
}
