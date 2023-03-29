using ECarManiac.Managers;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddJsonFile("appsettings.json");

var dbConnectionString = builder.Configuration.GetValue<string>("ConnectionString");

var dbConnection = CarDbManager.TestConnetion(dbConnectionString);

// Add services to the container.
builder.Services.AddControllersWithViews();

if (dbConnection == true)
{
    var app = builder.Build();

    // Configure the HTTP request pipeline.
    if (!app.Environment.IsDevelopment())
    {
        app.UseExceptionHandler("/Home/Error");
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
    }

    app.UseHttpsRedirection();
    app.UseStaticFiles();

    app.UseRouting();

    app.UseAuthorization();

    app.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}");

    app.Run();
}

Console.WriteLine("Db Connection not possible");