import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToSection";
import { getAllBlogPosts } from "@/data/blogPosts";
import { Calendar, Clock } from "phosphor-react";

const Blog = () => {
  useScrollToTop();
  const blogPosts = getAllBlogPosts();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>RevGrow Insights - B2B Growth & Lead Generation Blog</title>
        <meta name="description" content="Expert insights on B2B growth, lead generation, and go-to-market strategies. Learn how to build scalable, data-driven systems for predictable business growth." />
        <meta name="keywords" content="B2B Marketing, Lead Generation, Sales Strategy, Growth Strategy, Demand Generation, RevGrow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="RevGrow Insights - B2B Growth & Lead Generation Blog" />
        <meta property="og:description" content="Expert insights on B2B growth, lead generation, and go-to-market strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RevGrow Insights - B2B Growth & Lead Generation Blog" />
        <meta name="twitter:description" content="Expert insights on B2B growth, lead generation, and go-to-market strategies." />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-background py-20 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          ></div>
          {/* Progressive fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-background/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/10 to-background/60"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 sm:mb-6">
              <Link to="/" className="text-primary hover:underline inline-flex items-center gap-2 text-sm sm:text-base">
                ← Back to Home
              </Link>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              RevGrow Insights
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto px-2">
              Expert insights on B2B growth, lead generation, and go-to-market strategies
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Featured Image */}
                  {post.image && (
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          
          {/* Empty State */}
          {blogPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No blog posts available yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;

