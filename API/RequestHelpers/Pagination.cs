namespace API.RequestHelpers;

public class Pangination<T>(int _pageNumber, int _pageSize, int _count, IReadOnlyList<T> _data)
{
  public int pageNumber { get; set; } = _pageNumber;
  public int pageSize { get; set; } = _pageSize;
  public int Count { get; set; } = _count;
  public IReadOnlyList<T> Data { get; set; } = _data;
}