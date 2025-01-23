export interface LoginFormState {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    access_token: string;
    refresh_token: string;
    user: User;
  }
  
  export interface User {
    sub: string; // Unique user ID
    email: string; // User email
    role: Role; // User role
    rank: Rank; // User rank
    client: Client | null; // Client information (nullable)
    ship: Ship; // Ship information
    id: string; // User ID
    name: string; // User name
  }
  
  export interface Role {
    id: number; // Role ID
    code: string; // Role code (e.g., "admin")
    description: string; // Role description (e.g., "Admin")
  }
  
  export interface Rank {
    id: number; // Rank ID
    code: string; // Rank code (e.g., "2E")
    description: string; // Rank description (e.g., "2ND ENGINEER")
  }
  
  export interface Client {
    // Define client structure if known, otherwise leave it as an empty object
    [key: string]: unknown; // Dynamic properties (if unknown)
  }
  
  export interface Ship {
    name: string; // Ship name
    id: number; // Ship ID
  }
  