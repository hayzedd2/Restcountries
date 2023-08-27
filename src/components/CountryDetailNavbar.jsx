import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

function CountryDetailNavbar() {
  return (
    <div className="nav">
      <Breadcrumb
        spacing="8px"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "25px 0",
        }}
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="link">
            All
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/africa" className="link">
            Africa
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/asia" className="link">
            Asia
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}
export default CountryDetailNavbar;
