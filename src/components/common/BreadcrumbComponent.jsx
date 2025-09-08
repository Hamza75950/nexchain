import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import React from "react";

function BreadcrumbComponent() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="underline text-[16px] leading-[140%] tracking-[-0.045em] font-medium"
              href="/"
            >
              Homepage
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <p className="text-gray-400 text-lg">{">>"}</p>
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="text-[16px] leading-[140%] tracking-[-0.045em] font-medium"
              href="/blog"
            >
              Blog
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbComponent;
