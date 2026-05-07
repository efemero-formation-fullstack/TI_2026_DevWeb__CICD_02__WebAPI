import express, { Request, Response } from "express";
import calcService from "./services/calc.service.js";

// Env
const { PORT } = process.env;

// Create app
const app = express();

// Routes
app.get("/api/hello", (_req: Request, res: Response) => {
  res.json({ message: "👽 Bonjour le monde 👽" });
});

app.get("/api/even/:nb", (req: Request, res: Response) => {
  if (typeof req.params.nb !== "string") {
    return;
  }
  const nb = parseInt(req.params.nb);
  const isEven = calcService.isEven(nb);

  res.json({
    message: `La valeur ${nb} est ${isEven ? "paire" : "impaire"}`,
  });
});

app.get("/api/addition", (req: Request, res: Response) => {
  const nb1 = parseFloat(req.query.nb1 as string);
  const nb2 = parseFloat(req.query.nb2 as string);

  if (isNaN(nb1) || isNaN(nb2)) {
    res.status(422).json({
      message: "Boulet ! Donne des parametres nb1 et nb2 valides 😡",
    });
    return;
  }

  const result = calcService.add(nb1, nb2);
  res.json({
    message: `Le resultat de l'addition de ${nb1} et ${nb2} est ${result}`,
  });
});

// Start app
app.listen(PORT, () => {
  console.log(`Web API is running on port ${PORT}`);
});
