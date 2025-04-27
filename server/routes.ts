import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate request body using zod schema
      const validatedData = contactSubmissionSchema.parse(req.body);
      
      // Store the contact submission in memory
      // In a real application, we would likely want to send an email or save to a database
      const result = await storage.createContactSubmission(validatedData);
      
      // Return success response
      res.status(201).json({
        success: true,
        message: "Contact submission received successfully",
        id: result.id
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      }
      
      // Handle other errors
      console.error("Error handling contact form submission:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while processing your request"
      });
    }
  });

  // Get contact submissions (for demo/testing purposes)
  app.get('/api/contact', async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching submissions"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
