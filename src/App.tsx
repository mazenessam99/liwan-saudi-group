import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { routes } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import PageFallback from "@/components/shared/PageFallback";

const App = () => {
	return (
		<ThemeProvider
			defaultTheme="dark"
			storageKey="vite-ui-theme"
		>
			<Suspense fallback={<PageFallback />}>
				<RouterProvider router={routes} />
			</Suspense>
		</ThemeProvider>
	);
};

export default App;