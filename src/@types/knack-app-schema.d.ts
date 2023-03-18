declare namespace App {
  type Args = {
    file: string;
    output: string;
    verbose?: boolean;
  };
  type Schema = typeof import("../assets/mock_application.json");
}
