using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DotNetCsharp.Migrations
{
    public partial class seeddata : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Registration",
                columns: new[] { "Id", "Email", "Password", "Username" },
                values: new object[] { 1, "john21@gmail.com", "john@123", "John" });

            migrationBuilder.InsertData(
                table: "Registration",
                columns: new[] { "Id", "Email", "Password", "Username" },
                values: new object[] { 2, "christk@gmail.com", "chris@220", "Chris" });

            migrationBuilder.InsertData(
                table: "Registration",
                columns: new[] { "Id", "Email", "Password", "Username" },
                values: new object[] { 3, "mukesh@gmail.com", "muk@123", "Mukesh" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Registration",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Registration",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Registration",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
