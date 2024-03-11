import { NotFoundError } from "../class/Error";
import { findAllAttendance, findOneAttendance } from "./attendance.repository";

/**
 * Filter attendances
 * 
 * @description Filter attendances by userId, startDate, endDate then slice it into pages
 * @returns Attendance[]
 */
const filterAttendances = async (
  userId: string | undefined, 
  startDate: string | undefined,
  endDate: string | undefined,
  page: string, 
  perPage: string) => {
  const attendance = await findAllAttendance(
    userId,
    startDate,
    endDate,
    parseInt(page),
    parseInt(perPage)
  );

  return attendance;
};

/**
 * Get attendance details
 * 
 * @description Find attendance details by id
 * @returns Attendance
 */
const getAttendanceDetails = async (attendanceId: string) => {
  try {
    const attendance = await findOneAttendance(attendanceId);
    return attendance;
  } catch (err: any) {
    throw new NotFoundError("Attendance not found");
  }
}

export { filterAttendances, getAttendanceDetails };
