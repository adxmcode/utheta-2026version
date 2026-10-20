// frontend/src/components/Feed.jsx
import React, { useState, useEffect } from 'react';

function Feed({ activeRoomId }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch media posts whenever activeRoomId changes
    fetch(`http://localhost:3000/feed?roomId=${activeRoomId}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Feed error:", err));
  }, [activeRoomId]);

  if (loading) return <div>Loading feed...</div>;

  return (
    <div className="feed-container">
      {posts.length === 0 ? (
        <p>No media shared in this room yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="feed-card">
            <div className="feed-header">
              <strong>@{post.author?.username || 'User'}</strong>
              <small>{new Date(post.createdAt).toLocaleTimeString()}</small>
            </div>
            
            <p className="feed-caption">{post.caption}</p>

            {/* Display Media */}
            {post.mediaType === 'video' ? (
              <video src={post.mediaUrl} controls className="feed-media" />
            ) : (
              <img src={post.mediaUrl} alt="User media" className="feed-media" />
            )}
          </div>
        ))
      )}
    </div>
  );
}

// frontend/src/components/Feed.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';

function Feed({ activeRoomId }) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // Observer reference for detecting bottom of feed
  const observer = useRef();
  const lastPostElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  // Reset feed whenever the selected activeRoomId changes
  useEffect(() => {
    setPosts([]);
    setPage(1);
    setHasMore(true);
  }, [activeRoomId]);

  // Fetch paginated feed data on page increment
  useEffect(() => {
    setLoading(true);

    fetch(`http://localhost:3000/feed?roomId=${activeRoomId}&page=${page}&limit=5`)
      .then((res) => res.json())
      .then((data) => {
        setPosts((prevPosts) => [...prevPosts, ...data]);
        setHasMore(data.length > 0);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching feed:", err);
        setLoading(false);
      });
  }, [activeRoomId, page]);

  return (
    <div className="feed-container">
      {posts.map((post, index) => {
        // Attach ref to last element in list
        const isLastElement = posts.length === index + 1;
        return (
          <div 
            key={post.id} 
            ref={isLastElement ? lastPostElementRef : null} 
            className="feed-card"
          >
            <div className="feed-header">
              <strong>@{post.author?.username || 'User'}</strong>
              <small>{new Date(post.createdAt).toLocaleTimeString()}</small>
            </div>
            <p className="feed-caption">{post.caption}</p>
            {post.mediaType === 'video' ? (
              <video src={post.mediaUrl} controls className="feed-media" />
            ) : (
              <img src={post.mediaUrl} alt="Media" className="feed-media" />
            )}
          </div>
        );
      })}

      {loading && <p className="feed-loader">Loading more posts...</p>}
      {!hasMore && <p className="feed-end">You've reached the end of the feed.</p>}
    </div>
  );
}

export default Feed;