using System.Data.SqlClient;

namespace ECarManiac.Managers
{
    public static class CarDbManager
    {
        public static bool TestConnetion(string ConnectionString)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                try
                {
                    connection.Open();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }
    }
}
