import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: "Tous les champs sont requis" 
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Format d'email invalide" 
        });
      }

      // Here you would typically:
      // 1. Save the contact form submission to a database
      // 2. Send an email notification
      // 3. Send an auto-reply to the sender
      
      // For now, we'll just log it and return success
      console.log('Contact form submission:', {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      });

      res.json({ 
        message: "Message envoyé avec succès",
        success: true 
      });

    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        message: "Erreur serveur lors de l'envoi du message" 
      });
    }
  });

  // CV download endpoint
  app.get("/api/download-cv", (req, res) => {
    try {
      // In a real implementation, this would serve the actual CV file
      // For now, we'll return the path where the CV should be located
      const cvPath = path.join(__dirname, '../public/cv-mohamed-ali-chaoui.pdf');
      
      res.download(cvPath, 'CV-Mohamed-Ali-Chaoui.pdf', (err) => {
        if (err) {
          console.error('CV download error:', err);
          res.status(404).json({ 
            message: "CV non trouvé" 
          });
        }
      });
    } catch (error) {
      console.error('CV download error:', error);
      res.status(500).json({ 
        message: "Erreur lors du téléchargement du CV" 
      });
    }
  });

  // Portfolio data endpoint (if needed for future API calls)
  app.get("/api/portfolio", (req, res) => {
    try {
      // This could return portfolio data from a database
      // For now, the data is handled client-side
      res.json({ 
        message: "Portfolio data is handled client-side",
        success: true 
      });
    } catch (error) {
      console.error('Portfolio data error:', error);
      res.status(500).json({ 
        message: "Erreur lors de la récupération des données du portfolio" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
