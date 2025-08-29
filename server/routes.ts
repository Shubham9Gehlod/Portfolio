import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, message: "Message sent successfully", id: contact.id });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to send message" 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", async (req, res) => {
    try {
      // Path to the uploaded resume PDF
      const resumePath = path.resolve(__dirname, "../attached_assets/Shubham_Gehlod_Resume_Formatted_1756466809986.pdf");
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Shubham_Gehlod_Resume.pdf"');
      
      res.sendFile(resumePath, (err) => {
        if (err) {
          console.error("Resume download error:", err);
          res.status(404).json({ error: "Resume not found" });
        }
      });
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ error: "Failed to download resume" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
