export async function shareJob(title: string, url: string) {
  if (navigator.share) {
    await navigator.share({
      title,
      text: `Check out this job: ${title}`,
      url,
    });

    return;
  }

  await navigator.clipboard.writeText(url);

  alert('Job link copied!');
}
