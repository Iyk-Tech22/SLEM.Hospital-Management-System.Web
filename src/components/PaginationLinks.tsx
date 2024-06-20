import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"



export default function PaginationLinks() {
    return (
        <Pagination className="flex justify-between items-center text-sm">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className="rounded-full bg-primaryBlue text-white" href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className="rounded-full bg-white text-black" href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className="rounded-full bg-white text-black" href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext className="text-primaryBlue" href="#" />
                </PaginationItem>
            </PaginationContent>
            <div className="flex items-center space-x-3 text-xs font-medium text-primaryDarkBlue">
                <p>Results</p>
                <select className="bg-white py-1 px-2 rounded-full">
                    <option selected>1-10</option>
                    <option>10-20</option>
                </select>
                <p>of 100</p>
            </div>
        </Pagination>
    )
}