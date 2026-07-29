import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { routes } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import PageFallback from "@/components/shared/PageFallback";

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1300); 

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <PageFallback />;
	}

	return (
		<ThemeProvider
			defaultTheme="dark"
			storageKey="vite-ui-theme"
		>
			<RouterProvider router={routes} />
		</ThemeProvider>
	);
};

export default App;