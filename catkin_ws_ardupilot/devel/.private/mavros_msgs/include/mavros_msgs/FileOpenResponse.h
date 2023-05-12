// Generated by gencpp from file mavros_msgs/FileOpenResponse.msg
// DO NOT EDIT!


#ifndef MAVROS_MSGS_MESSAGE_FILEOPENRESPONSE_H
#define MAVROS_MSGS_MESSAGE_FILEOPENRESPONSE_H


#include <string>
#include <vector>
#include <memory>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace mavros_msgs
{
template <class ContainerAllocator>
struct FileOpenResponse_
{
  typedef FileOpenResponse_<ContainerAllocator> Type;

  FileOpenResponse_()
    : size(0)
    , success(false)
    , r_errno(0)  {
    }
  FileOpenResponse_(const ContainerAllocator& _alloc)
    : size(0)
    , success(false)
    , r_errno(0)  {
  (void)_alloc;
    }



   typedef uint32_t _size_type;
  _size_type size;

   typedef uint8_t _success_type;
  _success_type success;

   typedef int32_t _r_errno_type;
  _r_errno_type r_errno;





  typedef boost::shared_ptr< ::mavros_msgs::FileOpenResponse_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::mavros_msgs::FileOpenResponse_<ContainerAllocator> const> ConstPtr;

}; // struct FileOpenResponse_

typedef ::mavros_msgs::FileOpenResponse_<std::allocator<void> > FileOpenResponse;

typedef boost::shared_ptr< ::mavros_msgs::FileOpenResponse > FileOpenResponsePtr;
typedef boost::shared_ptr< ::mavros_msgs::FileOpenResponse const> FileOpenResponseConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::mavros_msgs::FileOpenResponse_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::mavros_msgs::FileOpenResponse_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::mavros_msgs::FileOpenResponse_<ContainerAllocator1> & lhs, const ::mavros_msgs::FileOpenResponse_<ContainerAllocator2> & rhs)
{
  return lhs.size == rhs.size &&
    lhs.success == rhs.success &&
    lhs.r_errno == rhs.r_errno;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::mavros_msgs::FileOpenResponse_<ContainerAllocator1> & lhs, const ::mavros_msgs::FileOpenResponse_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace mavros_msgs

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsMessage< ::mavros_msgs::FileOpenResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::mavros_msgs::FileOpenResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::mavros_msgs::FileOpenResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::mavros_msgs::FileOpenResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::mavros_msgs::FileOpenResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::mavros_msgs::FileOpenResponse_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::mavros_msgs::FileOpenResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "0ff9b1d5b96094ef5adccef61431a04f";
  }

  static const char* value(const ::mavros_msgs::FileOpenResponse_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x0ff9b1d5b96094efULL;
  static const uint64_t static_value2 = 0x5adccef61431a04fULL;
};

template<class ContainerAllocator>
struct DataType< ::mavros_msgs::FileOpenResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "mavros_msgs/FileOpenResponse";
  }

  static const char* value(const ::mavros_msgs::FileOpenResponse_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::mavros_msgs::FileOpenResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "uint32 size\n"
"bool success\n"
"int32 r_errno\n"
"\n"
;
  }

  static const char* value(const ::mavros_msgs::FileOpenResponse_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::mavros_msgs::FileOpenResponse_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.size);
      stream.next(m.success);
      stream.next(m.r_errno);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct FileOpenResponse_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::mavros_msgs::FileOpenResponse_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::mavros_msgs::FileOpenResponse_<ContainerAllocator>& v)
  {
    s << indent << "size: ";
    Printer<uint32_t>::stream(s, indent + "  ", v.size);
    s << indent << "success: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.success);
    s << indent << "r_errno: ";
    Printer<int32_t>::stream(s, indent + "  ", v.r_errno);
  }
};

} // namespace message_operations
} // namespace ros

#endif // MAVROS_MSGS_MESSAGE_FILEOPENRESPONSE_H
