import { AppointmentsData } from '@/data/constant';
import { AppointmentsTable } from '@/components/AppointmentsTable';
import PaginationLinks from '@/components/PaginationLinks';

const headers = ["profile", "name", "appointment With", "timing", "date", "disease", "action"];

export default function AppointmentsPage() {
    return (
      <div>
        <nav className="mb-4 md:hidden w-full">
          <PaginationLinks />
        </nav>
        <div className="space-y-5 bg-white rounded-md p-5 shadow-md">
          <header className="flex justify-between items-center">
            <h2 className="font-bold text-lg md:text-xl text-primaryDarkBlue">
              Upcoming Appointments
            </h2>
          </header>
          <AppointmentsTable
            headers={headers}
            appointments={AppointmentsData}
          />
        </div>
        <nav className="mt-10 hidden md:block w-full">
          <PaginationLinks />
        </nav>
      </div>
    );
}