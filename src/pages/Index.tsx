import NavBar from "@/components/beauty/NavBar";
import HeroServices from "@/components/beauty/HeroServices";
import AboutReviewsPromos from "@/components/beauty/AboutReviewsPromos";
import BookingContactsFooter from "@/components/beauty/BookingContactsFooter";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Index() {
  return (
    <div className="grain-overlay min-h-screen" style={{ background: "var(--dark)", color: "#EDE8DF" }}>
      <NavBar scrollTo={scrollTo} />
      <HeroServices scrollTo={scrollTo} />
      <AboutReviewsPromos scrollTo={scrollTo} />
      <BookingContactsFooter scrollTo={scrollTo} />
    </div>
  );
}
