export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 0) return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    if (diffInHours > 0) return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
    if (diffInMinutes > 0) return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
    return "Just now";
};
