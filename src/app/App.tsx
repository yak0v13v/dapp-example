import { Home } from "@/pages/home";
import { Providers } from "./Providers";
import "@radix-ui/themes/styles.css";

function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}

export default App;
