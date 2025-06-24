# Artistly.com - Performing Artist Booking Platform

A modern, responsive web application for connecting event planners with performing artists. Built with Next.js, React, and Tailwind CSS.

## 🎯 Features

### For Event Planners
- **Browse Artists**: Search and filter artists by category, location, and price range
- **Artist Profiles**: Detailed artist information with ratings, experience, and languages
- **Booking Requests**: Easy booking form with event details
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### For Artist Managers
- **Artist Onboarding**: Comprehensive form for artist registration
- **Dashboard**: Manage artist submissions with approve/reject functionality
- **Submission Tracking**: View submission status and details

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN/Radix UI
- **Forms**: React Hook Form + Yup validation
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── artists/           # Artist listing and details
│   ├── onboard/           # Artist onboarding form
│   └── dashboard/         # Manager dashboard
├── components/            # Reusable components
│   ├── ui/               # ShadCN UI components
│   ├── Header.tsx        # Navigation header
│   ├── ArtistCard.tsx    # Artist card component
│   └── FilterBlock.tsx   # Search and filter component
├── data/                 # Mock data and types
│   └── artists.ts        # Artist data and interfaces
└── lib/                  # Utility functions
    └── utils.ts          # Common utilities
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Avishkar2004/Artistly
cd artistly
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages Overview

### 1. Homepage (`/`)
- Hero section with call-to-action
- Category cards (Singers, Dancers, Comedians, Speakers)
- Featured artists showcase
- Statistics section

### 2. Artists Listing (`/artists`)
- Grid/List view toggle
- Advanced filtering (Category, Location, Price Range, Search)
- Responsive artist cards
- Real-time filter updates

### 3. Artist Detail (`/artists/[id]`)
- Comprehensive artist profile
- Performance details and languages
- Booking request form
- Success/error handling

### 4. Artist Onboarding (`/onboard`)
- Multi-section form with validation
- Category and language multi-select
- Form validation with React Hook Form + Yup
- Success confirmation

### 5. Manager Dashboard (`/dashboard`)
- Artist submission management
- Status tracking (Pending, Approved, Rejected)
- Action buttons for approval/rejection
- Submission detail modal

## 🎨 Key Features Implemented

### ✅ Responsive Design
- Mobile-first approach
- Grid to list view toggle
- Responsive navigation
- Touch-friendly interfaces

### ✅ Form Validation
- React Hook Form integration
- Yup schema validation
- Real-time error feedback
- Multi-select dropdowns with checkboxes

### ✅ State Management
- useState for local state
- Form state management
- Filter state handling
- Modal state management

### ✅ Component Reusability
- Modular component architecture
- Reusable UI components
- Consistent styling patterns
- Props-based customization

### ✅ SEO & Accessibility
- Proper meta tags
- Semantic HTML structure
- Alt text for images
- Keyboard navigation support

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings
4. Your app will be live at ``

### Environment Variables
No environment variables required for this demo version.

## 📊 Performance Optimizations

- **Code Splitting**: Automatic with Next.js App Router
- **Image Optimization**: Next.js Image component ready
- **Bundle Analysis**: Built-in with Next.js
- **Lazy Loading**: Automatic for routes and components

## 🔧 Customization

### Adding New Artists
Edit `src/data/artists.ts` to add new artist data:

```typescript
{
  id: 7,
  name: "New Artist",
  category: "New Category",
  priceRange: "₹X - ₹Y",
  location: "City, State",
  bio: "Artist bio...",
  languages: ["Language1", "Language2"],
  rating: 4.5,
  experience: "X+ years"
}
```

### Styling
- Uses Tailwind CSS utility classes
- Custom CSS in `globals.css`
- ShadCN component theming available

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for demonstration purposes.

## 🎭 Demo Data

The application uses mock data for demonstration. In a production environment, this would be replaced with:
- Real API endpoints
- Database integration
- Authentication system
- Payment processing
- Real-time notifications

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
