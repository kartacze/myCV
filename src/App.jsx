import Left from "./sections/Left";
import Right from "./sections/Right";
// import { footer } from "./sections/data";

function App() {
  return (
    <html data-theme="forest">
      <body class="h-[297mm] w-[210mm] p-5 m-auto">
        <div div class="flex flex-row gap-3">
          <Left />
          <Right />
        </div>
        {/* <footer class="text-center pt-5 text-sm text-gray-500">{footer}</footer> */}
      </body>
    </html>
  );
}

export default App;
