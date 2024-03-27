// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S

// I M P O R T:  C O M P O N E N T S
import { app } from "../server";

// ==============================================================

// S E R V E R   S T A R T
export const serverStart = (PORT: number | string) => {
  app.listen(PORT, () => {
    console.log("Server runs on Port: " + PORT, "🔄");
  });
};
