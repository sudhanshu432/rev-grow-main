import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToSection";
import { getBlogPostBySlug } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft } from "phosphor-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  useScrollToTop();
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }
  
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{post.title} | RevGrow Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.seoKeywords.join(", ")} />
        <meta name="author" content={post.author} />
        <meta name="publish_date" content={post.publishDate} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        {post.image && <meta property="og:image" content={window.location.origin + post.image} />}
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:author" content={post.author} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.image && <meta name="twitter:image" content={window.location.origin + post.image} />}
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            ...(post.image && { "image": window.location.origin + post.image }),
            "datePublished": post.publishDate,
            "author": {
              "@type": "Organization",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "RevGrow",
              "logo": {
                "@type": "ImageObject",
                "url": window.location.origin + "/revgrow.png"
              }
            },
            "keywords": post.seoKeywords.join(", ")
          })}
        </script>
      </Helmet>
      <Header />
      
      {/* Article Header */}
      <article className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            {post.title}
          </h1>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>By {post.author}</span>
            </div>
          </div>
          
          {/* Featured Image */}
          {post.image && (
            <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden mb-12 bg-muted">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-12 mb-6">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-foreground mb-6 leading-relaxed">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-3 mb-6">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-foreground">{children}</span>
                  </li>
                ),
                hr: () => (
                  <hr className="my-8 border-border" />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
          
          {/* CTA Section */}
          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your B2B Growth?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let RevGrow help you build a predictable, scalable revenue engine. Our experts are ready to help you achieve your growth goals.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Get Started with RevGrow
              </Button>
            </Link>
          </div>
          
          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <h4 className="font-semibold text-foreground mb-4">Share this article</h4>
            <div className="flex gap-3">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#0077b5] text-white rounded hover:bg-[#006399] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#1DA1F2] text-white rounded hover:bg-[#1a8cd8] transition-colors"
              >
                Twitter
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }}
                className="px-4 py-2 bg-muted text-foreground rounded hover:bg-muted/80 transition-colors"
              >
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost;

