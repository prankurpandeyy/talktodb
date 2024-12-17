import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function Tabledata({ data }) {
  return (
    <Table className="text-center">
      <TableCaption className="text-sm text-green-600 font-bold ml-8">
        Live data from database.
      </TableCaption>
      <TableHeader>
        <TableRow className="text-center ">
          <TableHead>Id</TableHead>
          <TableHead>name</TableHead>
          <TableHead>email</TableHead>
          <TableHead>phone_number</TableHead>
          <TableHead>address</TableHead>
          <TableHead>city</TableHead>
          <TableHead>state</TableHead>
          <TableHead>zip_code</TableHead>
          <TableHead>country</TableHead>
          <TableHead className="text-right">created at </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((db) => (
          <TableRow key={db._id}>
            <TableCell className="font-medium text-wrap w-12">
              {db._id}
            </TableCell>
            <TableCell className="font-medium">{db.name}</TableCell>
            <TableCell>{db.email}</TableCell>
            <TableCell>{db.phone_number}</TableCell>
            <TableCell className="text-right">{db.address}</TableCell>
            <TableCell className="text-right">{db.city}</TableCell>{" "}
            <TableCell className="text-right">{db.state}</TableCell>
            <TableCell className="text-right">{db.zip_code}</TableCell>{" "}
            <TableCell className="text-right">{db.country}</TableCell>
            <TableCell className="text-right">{db.created_at}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
