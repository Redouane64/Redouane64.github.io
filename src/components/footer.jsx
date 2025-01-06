export default function Footer() {
  const year = new Date().getUTCFullYear();

  return <>
    <footer>
      Redhouane Sobaihi &copy; {year}
    </footer>
  </>
}