import { Router } from "express";
import { HttpStatus } from "../anh/types/http-status";

const router = Router();

router.get("/", (req, res) => {
  res.status(HttpStatus.OK).json({
    message: "Hello World",
  });
});

export default router;
