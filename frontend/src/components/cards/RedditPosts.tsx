import { useAtom } from 'jotai';
import { StyledCard } from '../StyledCard';
import { redditPostsAtom } from '../../stores/RedditPosts';

// TODO: Add how many minutes ago was the post
export function RedditPosts() {
  const [posts] = useAtom(redditPostsAtom);

  return (
    <StyledCard title="Reddit Discussions" className="h-full row-span-2">
      <ul className="space-y-3">
        {posts.map(post => {
          return (
            <li>
              <a
                href={post.url}
                className="font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {post.title}
              </a>
              <div className="text-xs text-neutral-500">
                {post.subreddit} · {post.comments}
              </div>
            </li>
          );
        })}
      </ul>
    </StyledCard>
  );
}
