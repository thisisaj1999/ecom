import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { ProvideAuth } from '../src/utils/services/authentication.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ProvideAuth>
			<BrowserRouter>
				<SnackbarProvider
					maxSnack={1}
					autoHideDuration={2000}
					preventDuplicate
					anchorOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
				>
					<App />
				</SnackbarProvider>
			</BrowserRouter>
		</ProvideAuth>
	</React.StrictMode>
);
