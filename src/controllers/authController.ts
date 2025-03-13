import { Request, Response, NextFunction } from "express";

interface RegisterRequestBody {
  email: string;
  password: string;
}

interface LoginRequestBody {
  email: string;
  password: string;
}

export const register = async (
  req: Request<{}, {}, RegisterRequestBody>,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { email, password } = req.body;
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request<{}, {}, LoginRequestBody>,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { email, password } = req.body;

    // Simulasi proses autentikasi
    if (email === "user@example.com" && password === "password123") {
      return res.status(200).json({ token: "your_generated_token" });
    }

    return res.status(401).json({ message: "Invalid credentials" });
  } catch (error) {
    next(error);
  }
};
